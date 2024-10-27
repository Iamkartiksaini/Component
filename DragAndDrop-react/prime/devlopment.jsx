import React from 'react';

const Setting = () => {
    const xyz = {
        "index_1": {
            state: [{ title: "Item 1" }, { title: "Item 2" }],
            template(itemState) {
                return <div key={itemState.title}>{itemState.title}</div>;
            }
        }
    };

    return (
        <>
            <TestApp data={xyz} dragAndDropUniqueKey={"Xyx"} />
        </>
    );
};

const TestApp = ({ data }) => {
    return (
        <div>
            {Object.keys(data).map((key) => {
                const section = data[key];
                return (
                    <div key={key}>
                        {section.state.map((sectionState) => section.template(sectionState))}
                    </div>
                );
            })}
        </div>
    );
};

export default Setting;
