import clsx from 'clsx'

/* clsx */
const inputClass = clsx(
  'w-full',
  'px-4 py-2 mt-2 ',
  'bg-white',
  'border border-gray-400',
  'rounded-md'
)

const signUpButtonClass = clsx(
  'w-full bg-black text-white' ,
  'px-4 py-2 rounded-md hover:bg-gray-700 duration-200'
)

const flexClass = clsx(
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
)


const RegisterPage = () => {
  return (
    <section className={clsx(flexClass, 'mt-20')}>
      <div className={clsx(flexClass, 'p-6 rounded-md shadow-md')}>
        <h1 className="text-3xl font-semibold text-center">
          회원가입
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="email"
            >Email</label>
            <input
              className={inputClass}
              id="email"
              type="email"
            />
          </div>

          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="name"
            >Name</label>
            <input
              className={inputClass}
              id="name"
              type="text"
            />
          </div>

          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="password"
            >Password</label>
            <input
              className={inputClass}
              id="password"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className={signUpButtonClass}>
              회원가입
            </button>
          </div>

          <p className="mt-4 text-sm text-center text-gray-600">
            아이디가 있다면?{" "}
            <a
              className="font-medium text-blue-600 hover:underline"
              href="/login"
            >
              로그인
            </a>
          </p>

        </form>
      </div>
    </section>
  )
}

export default RegisterPage
