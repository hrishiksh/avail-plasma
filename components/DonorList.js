export default function DonorList({ donorData }) {
  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>
      </table>
      <ul>
        {donorData?.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
