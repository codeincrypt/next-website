export default function Invite() {
  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <h2 className="my-5">
              Invite your friends to join GeeksforGeeks family with you.
            </h2>
            <p>Your special invite URL</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value="https://auth.geeksforgeeks.org/invite/ztytl3b2/" onChange={console.log('copy karo')}
              />
              <button
                class="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src="https://media.geeksforgeeks.org/auth-dashboard-uploads/invitePageImg.svg"
              alt="imagesss"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
