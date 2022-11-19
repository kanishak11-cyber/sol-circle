import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CreateTeam = () => {
  const [teamName, setTeamName] = React.useState('')
  const [teamCode, setTeamCode] = React.useState('')
  const [teamMembers, setTeamMembers] = React.useState([])
  const [teamMember, setTeamMember] = React.useState('')
  
  const addTeamMember = () => {
    setTeamMembers([...teamMembers, teamMember])
    setTeamMember('')
  }

  const createTeam = () => {
    const team = {
      teamName,
      teamCode,
      teamMembers
    }

    console.log(team)
  }


  const handleTeamName = (e) => {
    setTeamName(e.target.value)
  }

  const handleTeamCode = (e) => {
    setTeamCode(e.target.value)
  }

  const handleTeamMember = (e) => {
    setTeamMember(e.target.value)
  }


  

  return (
    <div className=''>
      <Link href='/'>
      <Navbar />
      </Link>
      <div className='text-center  text-white uppercase revamp py-5'>
      <h1 className='text-5xl'>Create Team</h1>
      <form action="" method="post" className='flex flex-col text-xl px-20'>
        <input type="text" name="teamName" id="teamName" placeholder="Team Name" className='bg-transparent border px-2 py-1 rounded-lg m-2 text-white' />
        <input type="text" name="teamCode" id="teamCode" placeholder="Team Code" className='bg-transparent border px-2 py-1 rounded-lg m-2' />
        <input type="text" name="teamDescription" id="teamDescription" placeholder="Team Description" className='bg-transparent border px-2 py-1 rounded-lg m-2'/>
        <input type="text" name="teamMembers" id="teamMembers" placeholder="Team Members" className='bg-transparent border px-2 py-1 rounded-lg m-2' />

      </form>
      <button onClick={createTeam()} className='border px-3 py-1 rounded-lg'>
        Create Team
      </button>
      </div>
      <Footer />
    </div>
  )
}

export default CreateTeam