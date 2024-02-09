import Image from "next/image";
import { getContacts } from "@/queries";

export default async function Home() {

  const conts = await getContacts()

  // console.log(conts)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {conts && conts.map(data=>(
        <div key={data._id}>
            <h5>{data.email}</h5>
        </div>
      ))}
    </main>
  );
}
