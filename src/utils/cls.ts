/** tailwind를 위한 문자열을 합쳐주는 함수 */
function cls(...classNames: string[]) {
  return classNames.join(" ");
}

export default cls;

/*

 isEmail이라는 상태에 따라 스타일이 변경하는 input이 있다.

 ( cls 적용 전 )
 
 <input type="email" className={`w-full p-2 ${isEmail ? "border-orange-400 text-orange" : ""}`}/>


 ( cls 적용 후)

 <input type="email" className={cls("w-full p-2",isEmail ? "border-orange-400 text-orange" : "" )}


 즉, $와 백틱을 사용하지 않고 가독성을 높일 수 있다.
 */
