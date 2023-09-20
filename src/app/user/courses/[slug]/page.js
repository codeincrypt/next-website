export default function Courses() {
  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2>Data Structures</h2>
            <p className="fw-bold">DSA for Beginners</p>
            <p>Learn more about Data Structure in DSA Self Paced Course</p>

            <div className="card p-3 mb-3">
              <p className="mb-0">
                A data structure is a storage that is used to store and organize
                data. It is a way of arranging data on a computer so that it can
                be accessed and updated efficiently.
              </p>
            </div>

            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png"
              alt="imgh"
            />

            <p className="mt-4 mb-5">
              A data structure is not only used for organizing the data. It is
              also used for processing, retrieving, and storing data. There are
              different basic and advanced types of data structures that are
              used in almost every program or software system that has been
              developed. So we must have good knowledge about data structures.{" "}
            </p>

            <div className="card p-3 mb-3">
              <p className="">
                Get Hands-on With Data Structures and Algorithms
              </p>
              <p className="mb-0">
                Master fundamental computer science concepts to solve real-world
                problems and ace coding interview questions with Educative’s
                interactive course Data Structures and Algorithms in Python.
                Sign up at Educative.io with the code GEEKS10 to save 10% on
                your subscription.
              </p>
            </div>

            <h4 className="mt-4">Classification of Data Structure: </h4>

            <p>
              Linear data structure: Data structure in which data elements are
              arranged sequentially or linearly, where each element is attached
              to its previous and next adjacent elements, is called a linear
              data structure. <br />
              Examples of linear data structures are array, stack, queue, linked
              list, etc.
              <br />
              Static data structure: Static data structure has a fixed memory
              size. It is easier to access the elements in a static data
              structure. <br />
              An example of this data structure is an array.
              <br />
              Dynamic data structure: In dynamic data structure, the size is not
              fixed. It can be randomly updated during the runtime which may be
              considered efficient concerning the memory (space) complexity of
              the code. <br />
              Examples of this data structure are queue, stack, etc.
              <br />
              Non-linear data structure: Data structures where data elements are
              not placed sequentially or linearly are called non-linear data
              structures. In a non-linear data structure, we can’t traverse all
              the elements in a single run only. <br />
              Examples of non-linear data structures are trees and graphs.
              <br />
              For example, we can store a list of items having the same
              data-type using the array data structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
