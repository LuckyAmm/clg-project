import React from "react";

export default function Aicef() {
  const documents = [
    { fileName: "indexfileofAICEF.pdf", uid: "3446463d35gfg4" },
    { fileName: "edfedf.pdf", uid: "3446463d35gfg4" },
    { fileName: "2ew.pdf", uid: "3446463d35gfg4" },
    { fileName: "3eeefr.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    { fileName: "4ere.pdf", uid: "3446463d35gfg4" },
    {
      fileName:
        "4ere.pdf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae molestias minus cumque libero, nisi, ratione ad officiis voluptatum esse quis veniam fuga aperiam nesciunt laudantium at, voluptates provident sed id! Natus, illo nihil. Reiciendis facere ipsa accusantium, ipsum ea dolor quibusdam aliquid dolores veritatis velit culpa assumenda libero, iusto nemo?",
      uid: "3446463d35gfg4",
    },
  ];

  return (
    <div className="min-h-screen w-screen pt-20 ">
      <ul className="container mb-10 mx-auto">
        <div className="flex justify-center items-center m-2 bg-gray-400 py-3 px-2">
          <div className="w-1/6 text-center">INDEX</div>{" "}
          <li className="w-1/2">Name of the File</li>
          <span className="mx-auto">Download File</span>
        </div>
        {documents.map((item, i) => {
          return (
            <li
              key={i}
              className="flex justify-center items-center m-2 p-2 border-b-2 gap-3"
            >
              <div className="w-1/6 text-center">{i + 1}</div>{" "}
              <li className="w-1/2">{item.fileName}</li>
              <button className="bg-green-600 px-2 py-1 text-sm rounded hover:bg-green-700 text-white mx-auto">
                Download
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
