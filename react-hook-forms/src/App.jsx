import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, watch, formState: { errors, isSubmitting
  } } = useForm();
  function delay(d) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(4)
    let r = await fetch('http://localhost:3000/', {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(res);
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name", { required: true, minLength: 3, maxLength: 8 })} />
          {errors.name && <div>Error in Name field</div>}
          <br />
          <input type="email" {...register("email", { required: true, minLength: { value: 3, message: 'Minimum length 3 is requried' } })} />
          {errors.email && <div>{errors.email.message}</div>}
          <br />
          <input type="password" {...register("password")} />
          <br /> <br />
          <input disabled={isSubmitting} type="submit" />
        </form>
      </div>
      {isSubmitting && <div>loading</div>}
    </div>
  )
}

export default App
