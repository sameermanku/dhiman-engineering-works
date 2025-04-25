import React from "react";

const AdvancedMachines = () => {
  const machines = [
    {
      icon: `${import.meta.env.BASE_URL}img/icons/cogwheel.png`,
      title: "VMC Machining",
      description:
        "Vertical Machining Centers, also known as Vertical Milling Machines, create holes in flat parts. This technology is favored when three-axis work is done on a single face, such as in-mold and die works."
    },
    {
      icon: `${import.meta.env.BASE_URL}img/icons/helmet.png`,
      title: "EDM Machining",
      description:
        "EDM Sparking Processes is also known as the spark machining. Edm Spark Machine removes unnecessary metal shaped by a series of rapidly current discharges between two electrodes."
    },
    {
      icon: `${import.meta.env.BASE_URL}img/icons/wind-engine.png`,
      title: "Milling Lathe Machine",
      description:
        "A milling lathe machine is a complex machine that combines the functions of a lathe and a milling machine, allowing it to perform both turning and milling operations. The primary operation is turning, while milling is a secondary operation."
    },
    {
      icon: `${import.meta.env.BASE_URL}img/icons/pollution.png`,
      title: "Manual Lathe Machining",
      description:
        "The main function of a lathe is to remove metal from a job to give it the required shape and size. The job is securely adjusted between centers on the lathe machine and then turned against a single point cutting tool which will remove metal from the job in the form of chips."
    },
    {
      icon: `${import.meta.env.BASE_URL}img/icons/pumpjack.png`,
      title: "Cylindrical Grinder",
      description:
        "A cylindrical grinder is a machine that shapes metal into a round form. It uses a grinding wheel to smooth the outer surface of a rotating workpiece with high accuracy."
    },
    {
      icon: `${import.meta.env.BASE_URL}img/icons/light-bulb.png`,
      title: "Surface Grinder",
      description:
        "Surface grinding removes impurities and excess material from a workpiece to create a smooth, flat surface. It's often used in the final stages of production for metal parts and components."
    }
  ];

  return (
    <section className="services-2-section spad">
      <div className="container">
        <div className="service-text">
          <h2>
            We use modern machines and expert skills to create reliable solutions just for you
          </h2>
        </div>
        <div className="row">
          {machines.map((machine, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="si-head">
                  <div className="si-icon">
                    <img src={machine.icon} alt={machine.title} />
                  </div>
                  <h5>{machine.title}</h5>
                </div>
                <p>{machine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedMachines;