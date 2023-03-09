import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Log In</h1>
        <p className="mt-3">You need to start session to make an order</p>

        <div className="bg-white shadow-sm rounded-md mt-10 px-5 py-10">
            <form>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="email"                   
                    >Email:</label>
                    <input 
                        type="text"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Your email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password"                   
                    >Password:</label>
                    <input 
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Your password"
                    />
                </div>
                <input
                    type="submit"
                    value="Log in"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
            </form>
        </div>
        <nav className="mt-5 font-bold">
            <Link to="/auth/register">
                Not a member yet? Create an account
            </Link>
        </nav>
    </>
  )
}
