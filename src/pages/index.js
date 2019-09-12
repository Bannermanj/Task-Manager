import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"
import Calendar from "react-calendar"

//Import Custom Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState("calendar")

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Task Manager</h1>
      <hr />
      <div className="column">
        <h2 className="center">
          Today is {moment().format("dddd MMMM Do YYYY")}
        </h2>
        <div className="row smMarg">
          <button
            onClick={() => setView("calendar")}
            className={view === "calendar" ? "selectedCircleBtn" : "circleBtn"}
          >
            Calendar
          </button>
          <button
            onClick={() => setView("checklist")}
            className={view === "checklist" ? "selectedCircleBtn" : "circleBtn"}
          >
            Checklist
          </button>
          <button
            onClick={() => setView("notes")}
            className={view === "notes" ? "selectedCircleBtn" : "circleBtn"}
          >
            Notes
          </button>
        </div>
        <div
          className={view === "calendar" ? "" : "displayNone"}
          id="calendarWrapper"
        >
          <Calendar value={date} />
        </div>
        <div className={view === "checklist" ? "row" : "displayNone"}>
          <h2>Checklist</h2>
        </div>
        <div className={view === "notes" ? "row" : "displayNone"}>
          <h2>Notes</h2>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
