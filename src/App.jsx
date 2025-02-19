import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  Button
} from "@/components/ui/button"
function App() {

  return (
    <div className="w-screen text-3xl grid place-content-center h-screen bg-cyan-200 relative">
      <div className="absolute top-5 left-0 w-screen h-10 bg-slate-400 text-black px-2 py-1">
        <h2>hey</h2>
      </div>
      <Alert className='h-full w-full bg-slate-300 grid place-content-center '>
        <Terminal className="h-4 w-4" />
        <AlertTitle>That was just a test</AlertTitle>
        <AlertDescription>
          We will add some additional components soon 👀
        </AlertDescription>
        <Button className="mt-4 p-8 hover:bg-slate-150 hover:text-slate-900 focus:outline-none focus:bg-yellow-500 focus:text-black-50" variant="destructive">Let's go</Button>
      </Alert>
    </div>
  )
}

export default App
