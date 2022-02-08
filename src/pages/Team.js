import React from "react";
import styles from "../css/team.module.css";
import Card from "../components/common/Card";
import Man from "../images/man.jpg";
import Lantern from "../images/Homepage/Lantern.png";
function Team() {
  return (
    <div style={{ background: "#350F3E" }}>
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-5xl text-center p-3">
          Team
        </h1>
        <br />
        <div className="container lg:w-3/4 md:4/5 mx-auto">
          <div className="hidden md:block">
            <div className="grid grid-cols-1 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <br />
          </div>
          <div className="md:hidden">
            <div className="grid grid-cols-1 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-row justify-center" style={{transform:'scale(0.6)',padding:0,height:"inherit"}}>
              <Card name="Krati Arela" position="Overall Head" image={Man}/>
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-row justify-center" style={{transform:'scale(0.6)',padding:0}}>
              <Card name="Krati Arela" position="Overall Head" image={Man}/>
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-row justify-center" style={{transform:'scale(0.6)',padding:0}}>
              <Card name="Krati Arela" position="Overall Head" image={Man}/>
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-row justify-center" style={{transform:'scale(0.6)',padding:0}}>
              <Card name="Krati Arela" position="Overall Head" image={Man}/>
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <br />
          </div>
        </div>
        <div className="ml-5 mr-5 md:ml-40 md:mr-40  border-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          deserunt adipisci facere eos, id incidunt voluptate cupiditate dolor
          officia laboriosam voluptas repellat mollitia repellendus explicabo
          reprehenderit obcaecati aspernatur nostrum necessitatibus maiores!
          Nesciunt, officiis eos doloremque eligendi nostrum assumenda nemo
          optio dolor nihil, sequi quas ea beatae, quo ipsum dignissimos. Labore
          exercitationem aspernatur vitae incidunt deleniti, laboriosam harum
          odit odio enim quasi obcaecati cumque facere sapiente explicabo
          blanditiis modi, hic, accusamus numquam unde qui in corporis ea
          necessitatibus! Quod totam, veniam deleniti explicabo repellat
          officiis alias ipsam blanditiis sit quia numquam, provident tempora
          consequatur vero nostrum. A similique deserunt cumque illo!
        </div>
        <br />
      </div>
    </div>
  );
}

export default Team;
