import CustomTextField from "@ui/CustomTextField";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(data.email + " " + data.password);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white-500 mb-4">Login Form</h1>

      <form
        className="flex w-[300px] flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomTextField name="email" label="Email" />

        <input
          className="mb-4 rounded p-2 text-black"
          type="password"
          placeholder="Password"
        />

        <input
          className="cursor-pointer rounded bg-blue-500 p-2 text-white"
          type="submit"
        />
      </form>
    </div>
  );
}
