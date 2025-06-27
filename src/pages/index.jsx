
import React from 'react';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <div className="font-sans text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Adedoyin Ekong</h1>
          <div className="space-x-4 text-sm">
            <a href="https://github.com/doyindevops" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/adedoyin-ekong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@adedoyinekong" target="_blank" rel="noopener noreferrer">Medium</a>
            <a href="https://www.youtube.com/@doyinekong/playlists" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="/assets/Adedoyin_Ekong_Resume.pdf" target="_blank" className="text-blue-600">Resume</a>
          </div>
        </div>
      </header>

      <main className="px-4 py-10 max-w-6xl mx-auto">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
          <p className="text-lg leading-7">
            I’m a DevOps and DevSecOps Engineer with a strong focus on automating infrastructure,
            securing CI/CD pipelines, and delivering resilient cloud-native systems. I specialize in AWS,
            Kubernetes (EKS), Terraform, and security tools like Trivy, Checkov, and SonarCloud.
          </p>
          <p className="mt-4 text-lg leading-7">
            From GitOps with ArgoCD to integrating security in every stage of deployment, I bring real-world
            production experience and a passion for building systems that are not only scalable—but secure by design.
          </p>
        </section>

        <Projects />
      </main>

      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Adedoyin Ekong — Built with React + Tailwind CSS
      </footer>
    </div>
  );
};

export default IndexPage;
