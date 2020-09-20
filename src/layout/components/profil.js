import React from 'react'

function profil() {
    return (
        <div>
  <link rel="stylesheet" href="css/style.css" />
  {/* <title>Welcome To The Developer Connector</title>
  <nav className="navbar bg-dark">
    <h1>
      <a href="index.html"><i className="fas fa-code" /> DevConnector</a>
    </h1>
    <ul>
      <li><a href="profiles.html">Developers</a></li>
      <li><a href="posts.html">Posts</a></li>
      <li>
        |
        <a href="dashboard.html" title="Dashboard"><i className="fas fa-user" />
          <span className="hide-sm">Dashboard</span></a>
      </li>
      <li>
        <a href="login.html" title="Logout">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span></a>
      </li>
    </ul>
  </nav> */}
  <section className="container">
    <h1 className="large text-primary">
      Dashboard
    </h1>
    <p className="lead"><i className="fas fa-user" /> Welcome John Doe</p>
    <div className="dash-buttons">
      <a href="edit-profile.html" className="btn btn-light"><i className="fas fa-user-circle text-primary" /> Edit Profile</a>
      <a href="add-experience.html" className="btn btn-light"><i className="fab fa-black-tie text-primary" /> Add Experience</a>
      <a href="add-education.html" className="btn btn-light"><i className="fas fa-graduation-cap text-primary" /> Add Education</a>
    </div>
    <h2 className="my-2">Experience Credentials</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th className="hide-sm">Title</th>
          <th className="hide-sm">Years</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tech Guy Web Solutions</td>
          <td className="hide-sm">Senior Developer</td>
          <td className="hide-sm">
            02-03-2009 - 01-02-2014
          </td>
          <td>
            <button className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Traversy Media</td>
          <td className="hide-sm">Instructor &amp; Developer</td>
          <td className="hide-sm">
            02-03-2015 - Now
          </td>
          <td>
            <button className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 className="my-2">Education Credentials</h2>
    <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th className="hide-sm">Degree</th>
          <th className="hide-sm">Years</th>
          <th>
          </th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Northern Essex</td>
          <td className="hide-sm">Associates</td>
          <td className="hide-sm">
            02-03-2007 - 01-02-2009
          </td>
          <td>
            <button className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="my-2">
      <button className="btn btn-danger">
        <i className="fas fa-user-minus" />
        Delete My Account
      </button>
    </div>
  </section>
</div>

    )
}

export default profil
