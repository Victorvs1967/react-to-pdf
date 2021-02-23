import React, { Component } from 'react'

class ComponentToPrint extends Component {
    
    render() {
        return (
            <div className="container">
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ipsa officiis in tempore voluptate, inventore iusto. Assumenda id quaerat sunt aspernatur ullam qui quis totam ut, corrupti a eligendi mollitia repudiandae, molestiae porro natus iusto eaque. Accusantium minus fugiat perspiciatis pariatur adipisci expedita sint in asperiores, maiores sequi error dolorem aperiam facilis omnis, autem culpa qui nesciunt cum iste ratione illo sit inventore corporis voluptate. Qui suscipit aspernatur fuga explicabo soluta natus quisquam? Similique laudantium quaerat recusandae provident dolor maiores quo, iste alias earum quae distinctio molestias repellendus aperiam, esse debitis? Nihil fugiat doloribus repellat assumenda sunt dolorem? Vero dignissimos nobis expedita, neque autem quis, atque quaerat vel repudiandae perferendis est totam tempore molestiae, a beatae labore animi dolores? Deserunt debitis facere ab fugit consectetur perspiciatis vero. Fugit, ratione ut. Totam blanditiis harum quae, perferendis quod autem vero minima, reprehenderit dolores facere eveniet omnis accusantium eligendi sequi aut, expedita sit magnam quos commodi molestias eum! Eos adipisci, commodi cupiditate, ipsam unde doloremque voluptate vel esse id explicabo sit corrupti cumque laborum quos rerum facere animi debitis assumenda. Ad nulla qui laborum sapiente beatae nostrum veniam autem distinctio? Mollitia eaque est animi sunt magni assumenda voluptate, quaerat accusantium. Error, qui.
                </div>
                <br/>
                <div>
                    <table className="table" style={{color: "green", fontSize: "24px"}}>
                        <thead>
                            <tr>
                                <th>column 1</th>
                                <th>column 2</th>
                                <th>column 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>data 1</td>
                                <td>data 2</td>
                                <td>data 3</td>
                            </tr>
                            <tr>
                                <td>data A</td>
                                <td>data B</td>
                                <td>data C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <img src="https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs" alt="builder" width="1024px" />
                </div>
            </div>
        );
    }
}

export default ComponentToPrint;