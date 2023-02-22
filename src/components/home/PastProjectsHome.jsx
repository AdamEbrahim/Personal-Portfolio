import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import PastProjectCard from "./PastProjectCard";
import { Button } from "react-bootstrap/Button";

const PastProjectsHome = ({heading, allProjects}) => {
    return(
        <Jumbotron fluid id="projects" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row>
                    {allProjects.map((project, index) => (
                        <PastProjectCard
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            value={project}
                            urlIndex={index}
                        />
                        ))
                    }
                </Row>
            </Container>
        </Jumbotron>
    );

};

export default PastProjectsHome
