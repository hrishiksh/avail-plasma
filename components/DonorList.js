import style from "../styles/components/DonorList.module.scss";

export default function DonorList({ donorData }) {
  return (
    <div>
      <table className={style.donortable}>
        <thead className={style.donortable__head}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Group</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {donorData?.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.bloodgr}</td>
              <td>{post.address}</td>
              <td>{post.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
