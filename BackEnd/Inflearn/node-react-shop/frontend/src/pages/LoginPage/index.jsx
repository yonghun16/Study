/* import library */
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

/* import components, modules, hooks */
import { loginUser } from '../../store/thunkFunctions'


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

/* LoginPage Component */
const LoginPage = () => {
  // react-hook-form
  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange'})

  // onSubmit
  const dispatch = useDispatch();

  const onSubmit = ({ email, password}) => {   // onSubmit 하면 정보를 넘겨줌
    const body = {
      email,
      password,
      //image : `http://miniloopmedia.com/wp-content/uploads/2015/02/Russian_Male.png`
    }

    dispatch(loginUser (body))   // registerUser thunk 함수에 body객체를 전달

    reset()
  }

  // email 유효성 검사 양식 객체 (react-hook-form)
  const userEmail = {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // 정규표현식을 통한 유효성 검사.
      message: "Invalid email format",
    },
  }

  // password 유효성 검사 양식 객체 (react-hook-form)
  const userPassword = {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "최소 5자 입니다.",
    },
  }

  // Login Page UI render
  return (
    <section className={clsx(flexClass, 'mt-20')}>
      <div className={clsx(flexClass, 'p-6 rounded-md shadow-md')}>

        {/* login title*/}
        <h1 className="text-3xl font-semibold text-center">
          로그인
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>  {/* react-hook-form */}

          {/* email input*/}
          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="email"
            >Email</label>
            <input
              className={inputClass}
              id="email"
              type="email"
              {...register('email', userEmail)}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* password input*/}
          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="password"
            >Password</label>
            <input
              className={inputClass}
              id="password"
              type="password"
              {...register('password', userPassword)}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* login button*/}
          <div className="mt-6">
            <button
              type="submit"
              className={signUpButtonClass}>
              로그인
            </button>
          </div>

          {/* register link*/}
          <p className="mt-4 text-sm text-center text-gray-600">
            아이디가 없다면?{" "}
            <a
              className="font-medium text-blue-600 hover:underline"
              href="/register"
            >
              회원가입
            </a>
          </p>

        </form>
      </div>
    </section>
  )
}

export default LoginPage
