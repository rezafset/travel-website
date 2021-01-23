import React from 'react';

const Faq = () => {
    return (
        <div id="faq" className="pt-5">
            <div className="container">
                <h1 className="display-5 text-uppercase text-center">Faq</h1>
                <div className="row pt-5">
                    <div className="col-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="flush-collapseOne"
                                    >
                                        What are the most surreal places to visit?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="flush-headingOne"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit perferendis facere soluta nam vitae hic ducimus sapiente nihil voluptatem quod, reiciendis harum quisquam amet ut possimus optio minima accusamus deleniti culpa aliquid sit nulla veniam esse. Aut, aliquam amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Do you have to be rich to travel the world?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit perferendis facere soluta nam vitae hic ducimus sapiente nihil voluptatem quod, reiciendis harum quisquam amet ut possimus optio minima accusamus deleniti culpa aliquid sit nulla veniam esse. Aut, aliquam amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        What’s it really like to be a travel writer?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit perferendis facere soluta nam vitae hic ducimus sapiente nihil voluptatem quod, reiciendis harum quisquam amet ut possimus optio minima accusamus deleniti culpa aliquid sit nulla veniam esse. Aut, aliquam amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFour">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        What’s it really like to be a travel writer?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFour"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit perferendis facere soluta nam vitae hic ducimus sapiente nihil voluptatem quod, reiciendis harum quisquam amet ut possimus optio minima accusamus deleniti culpa aliquid sit nulla veniam esse. Aut, aliquam amet.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFive">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFive"
                                    >
                                        Where are the best places to travel alone?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFive"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFive"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit perferendis facere soluta nam vitae hic ducimus sapiente nihil voluptatem quod, reiciendis harum quisquam amet ut possimus optio minima accusamus deleniti culpa aliquid sit nulla veniam esse. Aut, aliquam amet.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;