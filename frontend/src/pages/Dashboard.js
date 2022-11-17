import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import '../Zoom.css';
import Zoom from './Zoom';

const Dashboard = (props) => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  
  let {user} = useContext(AuthContext);
  const pageTitle = 'Dashboard';
  // Zoom
  const [joinMeeting, setJoinMeeting] = useState(false);

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async() => {
    let response = await fetch('http://localhost:8000/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200){
      setNotes(data)
    } else if (response.status === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.caption} | {pageTitle}</title>
        <link rel="canonical" href="http://9jacodekids.com" />
        <meta name="description" content="9jaCodeKids website, learn coding" />
      </Helmet>
      
      <main className="main" id="top">
        <Header />

        <section className="pt-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center py-6">
                <h1 className="mb-4 fs-9 fw-bold">Dashboard</h1>
                {user && <p>Hello {user.username}</p>}

                {/* Zoom */}
                {joinMeeting ? (
                  <Zoom />
                ) : (
                  <button className='btn btn-primary' onClick={() => setJoinMeeting(true)}>Join Meeting</button>
                )}
              </div>
            </div>

            <div className="row">
              <ul>
                { notes.map(note => (
                  <li key={note.id}>{note.body}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
