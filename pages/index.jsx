import React from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/ip")
      } catch (error) {
        console.log(error);
      }
    }
    getIp()
  }, [])

  return (
    <div>
      <h1>CIAOOOO! Sto per rubarti l'indirizzo ip</h1>
    </div>

  )
}
