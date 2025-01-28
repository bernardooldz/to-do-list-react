
function Title({ sectionName, nameClass }) {
    return (
      <div className={nameClass}>
        <h1>{sectionName}</h1>
        <hr/>
      </div>
    );
  }
  
  export default Title;
  