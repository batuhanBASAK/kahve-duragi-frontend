import React, { useState } from 'react'
import Button from './common/Button';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Since there is no backend yet, we will do nothing here.

    alert("İsteğiniz başarılı bir şekilde gönderilmiştir.");
    setName("");
    setEmail("");
    setSubject("");
  }

  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <h2 className="font-bold font-serif text-2xl mb-16 text-center">İletişim</h2>

      <form className="w-full flex flex-col items-center justify-center gap-4">
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-bold" htmlFor="name">İsim</label>
          <input className="w-full p-2 text-lg border-2 border-black rounded-sm" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="İsminizi buraya giriniz." required />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-bold" htmlFor="email">Email</label>
          <input className="w-full p-2 text-lg border-2 border-black rounded-sm" type="mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email adresinizi buraya giriniz." required />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-bold" htmlFor="subject">Konu</label>
          <input className="w-full p-2 text-lg border-2 border-black rounded-sm" type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Lütfen ne hakkında iletişime geçmek istediğinizi buraya giriniz." required />
        </div>
        <Button onClick={handleSubmit}>Gönder</Button>
      </form>
    </section>
  )
}

export default Contact