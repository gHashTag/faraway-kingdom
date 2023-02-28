import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {WelcomeSection} from 'src/components/sections/Welcome';

import {AboutSection} from '../components/sections/About';
import {EventsSection} from '../components/sections/Events';
import {ExploreSection} from '../components/sections/Explore';
import {FooterSection} from '../components/sections/Footer';
import {PosterSection} from '../components/sections/Poster';
import {imagesData} from '../constants/sliderImagesData';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <WelcomeSection sliderImages={imagesData} />
        <AboutSection />
        <PosterSection />
        <ExploreSection />
        <EventsSection />
        <FooterSection />
      </main>
    </Layout>
  );
}
