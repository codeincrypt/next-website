export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="row">
          <div className="col-lg-4 text-center">
            <img
              className="img-fluid"
              width={100}
              src="https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"
              alt="codeincrypt"
            />

            <h2 className="mt-3">codeincrypt</h2>
            <h3 className="mt-2">
              444 <span className="text-muted small">Rank</span>{" "}
            </h3>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}
