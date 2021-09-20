import React from 'react';

const Home = () => {
    return (
        <main id="main">
            <div
                class="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 jumbotron jumbotron-fluid">
                <div class="text-center container">
                    <h1 class="display-1">Jasmine Rudolph</h1>
                    <div class="Typist lead typist"> Web Development | Web Design | FullStack Development  </div>
                    <div class="p-5"><a class="email p-2" href="https://github.com/jazcr"
                        aria-label="Github"><i class="fab fa-github fa-3x socialicons"></i></a><a
                            class="email p-2" href="https://www.linkedin.com/in/jasmine-rudolph-03072920b/"
                            aria-label="My linkedin"><i class="fab fa-linkedin  fa-3x socialicons"></i></a><a
                            class="email p-2" href="mailto:jazcrudolph@gmail.com">
                            <i class="far fa-envelope fa-3x socialicons"></i>
                        </a></div>

                </div>
            </div>
        </main>
    );
};

export default Home;