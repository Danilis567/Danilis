import Title from "../components/Title"

function Contacts() {
  return (
    <>
      <div className="Forms animate__bounceInUp animate__animated">
        <div>
         <Title title="Forms" />
        </div>
        <label>Name</label>
        <input type="text" className="input" />
        <label>Email</label>
        <input type="email" className="input" />
        <label>Message</label>
        <textarea cols="30" rows="10" className="textarea"></textarea>
        <input type="button" className="btn-yellow" value={"Send"} />
      </div>
    </>
  );
}

export default Contacts;
