'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Form from "@components/Form"

const CreatePrompt = () => {
  const[submitting, setSubmitting]=useState(false)
  const [post, setPost]=useState({
    prompt:"",
    tag:'',
  })
  return (
   <Form
    type="create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handlePost={setSubmitting}
   />
  )
}

export default CreatePrompt
