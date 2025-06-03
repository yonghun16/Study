/* import library */
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

/* import components, modules, hooks */
import { registerUser } from '../../store/thunkFunctions'


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
  // react-hook-form
  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange'})


  const dispatch = useDispatch();


  const onSubmit = ({ email, password, name }) => {   // onSubmit 하면 정보를 넘겨줌
    const body = {
      email,
      password,
      name,
      image : `http://miniloopmedia.com/wp-content/uploads/2015/02/Russian_Male.png`
    }

    dispatch(registerUser (body))   // registerUser thunk 함수에 body객체를 전달

    reset()
  }

  const userName = {
    required: "Name is required",
  }

  const userEmail = {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // 정규표현식을 통한 유효성 검사.
      message: "Invalid email format",
    },
  }

  const userPassword = {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "최소 5자 입니다.",
    },
  }


  return (
    <section className={clsx(flexClass, 'mt-20')}>
      <div className={clsx(flexClass, 'p-6 rounded-md shadow-md')}>
        <h1 className="text-3xl font-semibold text-center">
          회원가입
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>  {/* react-hook-form */}
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

          <div className="mb-2">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="name"
            >Name</label>
            <input
              className={inputClass}
              id="name"
              type="text"
              {...register('name', userName)}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
              {...register('password', userPassword)}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
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
