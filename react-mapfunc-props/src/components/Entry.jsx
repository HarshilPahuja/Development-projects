import emojipedia from "../emojipedia";

export default function Entry(props){
return (
 <div className="term">
          <dt>
            <span className="emoji" >
              {props.image}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
</div>
);
}