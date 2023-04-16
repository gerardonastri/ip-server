import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  const [ip, setIp] = useState(null)

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await axios.get("https://ip-server.vercel.app/api/ip")
        setIp(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getIp()
  }, [])

  return (
    <div>
      <h1>CIAOOOO! Sto per rubarti l'indirizzo ip</h1>
      <h1>Il tuo indirizzo è {ip && ip}</h1>
    </div>

  )
}
