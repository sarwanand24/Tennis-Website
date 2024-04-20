import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

import FAQAccordion from './FAQAccordion';

const firebaseConfig = {
  apiKey: "AIzaSyByotZ25hk_X6CgcS-TMYmzHzGZBXhUmkU",
  authDomain: "unlimited-storage24.firebaseapp.com",
  databaseURL: "https://unlimited-storage24-default-rtdb.firebaseio.com",
  projectId: "unlimited-storage24",
  storageBucket: "unlimited-storage24.appspot.com",
  messagingSenderId: "1067181529757",
  appId: "1:1067181529757:web:dc1984c04f9c9afc85d274",
  measurementId: "G-267EFNN5XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();

function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
      <p className="text-lg">{comment.text}</p>
      {showReplies &&
        comment.replies &&
        Object.keys(comment.replies).map((replyKey, index) => (
          <Reply key={index} reply={comment.replies[replyKey]} />
        ))}
      <button
        className="text-gray-400 hover:text-gray-200 mt-2 focus:outline-none transition-colors duration-300"
        onClick={toggleReplies}
      >
        {showReplies ? 'Hide Replies' : 'View Replies'}
      </button>
    </div>
  );
}

function Reply({ reply }) {
  return <p className="bg-gray-800 text-white p-3 rounded-lg mt-2 ml-10">{reply.text}</p>;
}

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState({});
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    const Ref = ref(db, 'comments/');
    onValue(Ref, (snapshot) => {
      const commentsData = snapshot.val();
      if (commentsData) {
        setComments(commentsData);
      }
    });
  }, []);

  const addComment = () => {
    if (newCommentText) {
      const CommentListRef = ref(db, 'comments/');
      const newCommentRef = push(CommentListRef);
      set(newCommentRef, {
        text: newCommentText,
      });
      setNewCommentText('');
    }
  };

  const addReply = (commentId) => {
    setShowReplyInput((prevState) => ({
      ...prevState,
      [commentId]: true,
    }));
  };

  const submitReply = (commentId) => {
    if (replyText) {
      const repliesRef = ref(db, `comments/${commentId}/replies`);
      const newRepliesRef = push(repliesRef);
      set(newRepliesRef, {
        text: replyText,
      });
    }
    setShowReplyInput((prevState) => ({
      ...prevState,
      [commentId]: false,
    }));
  };

  const faqs = [
    {
      question: "What equipment do I need to play tennis?",
      answer: "To play tennis, you'll need a tennis racket, tennis balls, appropriate footwear, and comfortable clothing suitable for physical activity."
    },
    {
      question: "How do I choose the right tennis racket?",
      answer: "When choosing a tennis racket, consider factors such as your skill level, playing style, and personal preferences. It's a good idea to try out different rackets to find one that feels comfortable and suits your game."
    },
    {
      question: "What are the rules of tennis?",
      answer: "Tennis is played on a rectangular court with a net in the middle. The objective is to hit the ball over the net and into the opponent's court in a way that prevents them from returning it. Points are scored when the opponent fails to return the ball within the prescribed boundaries. The game is typically played in sets, with the winner being the player or team that wins the most sets."
    },
    {
      question: "How can I improve my tennis skills?",
      answer: "To improve your tennis skills, consider practicing regularly, working on your technique, and participating in lessons or clinics led by experienced coaches. Additionally, watching professional matches and analyzing your own gameplay can help identify areas for improvement."
    },
    {
      question: "What are the different types of tennis court surfaces?",
      answer: "Tennis courts can have various surfaces, including grass, clay, hard court (e.g., concrete or asphalt), and carpet. Each surface has its unique characteristics, which can affect factors such as ball speed, bounce, and player movement."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-800 to-yellow-900">
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">FAQ's</h1>
      <FAQAccordion faqs={faqs} />
      <h1 className="text-3xl font-bold mt-10 mb-6 text-white">All Comments</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Enter your comment..."
          className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
          onClick={addComment}
        >
          Add Comment
        </button>
      </div>
      {Object.keys(comments).map((key) => (
        <div key={key} className="mb-4">
          <Comment comment={{ id: key, ...comments[key] }} />
          <div className="flex items-center mt-2">
            {showReplyInput[key] ? (
              <>
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Enter your reply..."
                  className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none"
                />
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-2 rounded-md mr-2 focus:outline-none"
                  onClick={() => submitReply(key)}
                >
                  Submit
                </button>
              </>
            ) : (
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-2 rounded-md mr-2 focus:outline-none"
                onClick={() => addReply(key)}
              >
                Reply
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default CommentSection;
