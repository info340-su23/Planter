import './CreatePost.css'

export default function CreatePost() {
    return (
        
        <div className="post-container">

        {/* <!-- container for first row --> */}
        <div className="title-row">
            {/* <!-- Account icon --> */}
          <div className="account-icon">
            <span className="material-icons" aria-label="account_circle">account_circle</span>
          </div>

          {/* <!-- Title input --> */}
          <div className="title-box">
            <input type="text" name="text" placeholder="create post"></input>
          </div>
        </div>

      </div>
    );
}