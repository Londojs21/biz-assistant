import React, { useState, useEffect } from 'react';

const tasks = [
  {
    day: 1,
    task: "List all your income sources from last month.",
    scenario: {
      title: "Client Ghosted You",
      description: "$1,200 invoice past due, client not responding.",
      options: [
        "A) Write off the invoice.",
        "B) Send a formal payment reminder.",
        "C) Offer a payment plan or discount.",
      ],
    },
  },
  // Add more days as needed
];

export default function App() {
  const [day, setDay] = useState(1);
  const [completed, setCompleted] = useState([]);

  const today = tasks.find((t) => t.day === day);

  const completeTask = () => {
    setCompleted([...completed, day]);
    setDay(day + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Day {today.day}: Business Challenge</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">🧠 Task</h2>
          <p>{today.task}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">🔥 Scenario: {today.scenario.title}</h2>
          <p className="mb-2">{today.scenario.description}</p>
          <ul className="list-disc list-inside">
            {today.scenario.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          onClick={completeTask}
        >
          ✅ Mark Complete & Go to Next Day
        </button>

        <div className="mt-6 text-sm text-gray-600">
          Completed Days: {completed.join(', ') || 'None yet'}
        </div>
      </div>
    </div>
  );
}
