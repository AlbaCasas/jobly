<div align="center">
  <h3 align="center">Jobly</h3>
  <p align="center">
    A React and Mongo marketplace aiming to connect companies and professionals in the tech world.
    <br />
    <br />
    <a href="https://google.es">View Demo</a></p>
</div>

## Intro

![alt Jobly Project](./doc/preview.png)

---

Jobly is a fullstack project in where I aim to prove my React and Mongo skills in solving complex real world use cases.

Jobly is a job marketplace where candidates can register and apply for jobs, as well as add their resume and edit their profile.

Companies on the other hand can register and create job postings for candidates. Companies can see their the job postings and candidatures in a different feed.

## Functional Description

#### Candidate

- The candidate may be able to register and log in
- The candidate may view company job postings in a feed
- The candidate can search by title or company
- The candidate will be able to filter requirements (location, position)
- The candidate will be able to edit his profile and password.
- The candidate can apply for an job posting.
- The candidate can send his resume to the job postings in the applying process
- The candidate will be able to delete his account

#### Bussiness

- A company may register and log in
- A company will be able to edit his profile and password.
- A company can be able to view job postings
- A company can add job postings in its "Companies" section.
- A company can be able to see how many candidates have applied to its job posting.
- A company can be able to see its job postings
- A company can be able to see the candidates' profile who have applied to its job posting.
- A company will be able to delete his account
- A company will be able to update its job

---

### Use Cases

##### Candidate

![alt Jobly Project](./doc/use-case-candidate.png)

---

#### Company

![alt Jobly Project](./doc/uses-cases-company.png)

#### User Interface (UI)

##### Main Views

![alt Jobly Project](figma/mobile-login-signup.png)
![alt Jobly Project](figma/login-signup.png)
![alt Jobly Project](figma/board-candidate.png)
![alt Jobly Project](figma/board-company.png)
![alt Jobly Project](figma/board-mobile.png)
![alt Jobly Project](figma/profile.png)
![alt Jobly Project](figma/profile-mobile.png)
![alt Jobly Project](figma/details-job.png)
![alt Jobly Project](figma/list-candidates.png)
![alt Jobly Project](figma/list-jobs-mobile-company.png)

## Technical Description

### Blocks

![alt Jobly Project](./doc/blocks.jpg)

---

### Data Model

![alt Jobly Project](./doc/diagram.png)

---

User

- email (string, required, unique)
- password (string, required, min length 8)
- location (String, required)
- phone (String, required)
- avatar (String)
- name (String, required)
- role (String, enum: ["company", "candidate"], required)

Jobs

- company (ObjectId, ref: "User", required)
- title (String, required)
- description (String, required)
- role (String, required, enum["designer", "developer", "product"]
- location (String, required)
- candidatures (Array)
  - candidate (ObjectId, ref: "User")
  - resume: String
  - createAt: (Date, required, dafault(Date now))
- createAt (Date, required, dafault(Date now))
