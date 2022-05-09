import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
        <div className="border p-5 rounded-md">
          <p className="text-xl font-semibold capitalize">
            Difference between Javascript and Node js ?
          </p>
          <p className="text-slate-600">
            <span className="text-orange-500">Answer :</span>JavaScript is a
            proper high-level programming language used to create web scripts
            whereas Node.js is a run time environment built on googles v8
            engine.JavaScript is executed in the browser whereas using Node.js
            gives us the ability to execute JavaScript outside the
            browser.JavaScript can manipulate DOM or add HTML within whereas
            Node.js doesnt have the capability to add HTML.
          </p>
        </div>
        <div className="border p-5 rounded-md">
          <p className="text-xl font-semibold capitalize">
            When Should you use node js and when should use mongo db?
          </p>
          <p className="text-slate-600">
            <span className="text-orange-500">Answer :</span>if you want to
            connect with database its time to use mongobd and when you want to
            make server then note js is idol for that . as i say mongodb is a
            database system and node jjs is a javascript server run time
            environment.{" "}
          </p>
        </div>
        <div className="border p-5 rounded-md">
          <p className="text-xl font-semibold capitalize">
            Difference between sql and noSql ?
          </p>
          <p className="text-slate-600">
            <span className="text-orange-500">Answer :</span> sql and no sql are
            both is database system .sql as know relational database .and nosql
            as know non relational database. sql use tabular database system in
            other hand nosql use json format database system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
