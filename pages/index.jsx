import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  const [ip, setIp] = useState(null)
  const [user, setUser] = useState(null)
  const [platform, setPlatform] = useState(null)
  const [architecture, setArchitecture] = useState(null)

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await axios.get("https://ip-server.vercel.app/api/ip")
        // const res = await axios.get("http://localhost:3000/api/ip")
        setIp(res.data.ip)
        setUser(res.data.userInfo)
        setPlatform(res.data.platform)
        setArchitecture(res.data.architecture)
      } catch (error) {
        console.log(error);
      }
    }
    getIp()
  }, [])

  console.log(user);

  return (
    <div>
      <h1>CIAOOOO! Sto per rubarti l'indirizzo ip</h1>
      <h1>Il tuo indirizzo è {ip && ip}</h1>
      <h1>Il tuo nome è: {user && user.username}</h1>
      <h1>La tua homedire è: {user && user.homedir}</h1>
      <h1>La tua piattaforma è: {platform && platform}</h1>
      <h1>La tua architettura è: {architecture && architecture}</h1>
    </div>

  )
}
