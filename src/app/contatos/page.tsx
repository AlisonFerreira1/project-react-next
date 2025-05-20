export default function contatos() {
  return (
    <section className="m-[4.5rem] flex flex-col gap-[4rem]">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-[40px]">Gostou do que viu?</h1>
        <h2 className="text-[20px]">Entre em contato atraves de:</h2>
        <div className="flex flex-row gap-8 mt-[5rem]">
          <a className="bg-gray-500 p-[4rem] rounded-[2rem]" href="">
            Github
          </a>
          <a className="bg-gray-500 p-[4rem] rounded-[2rem]" href="">
            Linkedin
          </a>
          <a className="bg-gray-500 p-[4rem] rounded-[2rem]" href="">
            Email
          </a>
          <a className="bg-gray-500 p-[4rem] rounded-[2rem]" href="">
            Telefone
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-[40px]">Me envie um Email!</h1>
        <h2 className="text-[20px]">Agradeço o contato e aguarde o retorno:</h2>
        <div className="grid grid-cols-3 gap-[1rem] mt-[4rem] w-[100%]">
          <input
            className="col-start-1 col-end-4 input-style "
            aria-label="a"
            type="text"
            placeholder=" "
          />
          <input
            className="input-style"
            aria-label="a"
            type="text"
            placeholder=" "
          />
          <input
            className="col-span-2 input-style"
            aria-label="a"
            type="text"
            placeholder=" "
          />
          <input
            className="col-start-1 col-end-4 input-style"
            aria-label="a"
            type="text"
            placeholder=""
          />
          <input
            className="col-span-2 input-style"
            aria-label="a"
            type="text"
            placeholder=""
          />

          <button
            className="bg-red-100 rounded-3xl"
            type="submit"
            aria-label="a"
          ></button>
        </div>
      </div>
    </section>
  );
}
