import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div>
      <h2>⚠️ 오류 발생</h2>
      <p>{error?.message || "알 수 없는 오류입니다."}</p>
    </div>
  );
}

export default ErrorPage;
