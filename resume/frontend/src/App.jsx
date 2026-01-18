import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import LoadingSpinner from './components/LoadingSpinner';
import AnalysisResults from './components/AnalysisResults';
import { analyzeResume, checkHealth } from './services/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [serviceStatus, setServiceStatus] = useState(null);

  // Check API health on mount
  useEffect(() => {
    checkHealth().then(setServiceStatus);
  }, []);

  const handleSubmit = async (resume, jobDescription) => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await analyzeResume(resume, jobDescription);
      setResults(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError(null);
  };

  return (
    <div className="app">
      <Header />

      {/* Service Status Warning */}
      {serviceStatus && !serviceStatus.llm_available && (
        <div className="error" style={{ marginBottom: '2rem' }}>
          <div className="error__icon">⚠️</div>
          <h3 className="error__title">LLM Service Unavailable</h3>
          <p className="error__message">{serviceStatus.message}</p>
          <p className="error__message" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Make sure Ollama is running: <code>ollama serve</code><br />
            And you have a model installed: <code>ollama pull llama3.2</code>
          </p>
        </div>
      )}

      {/* Main Content */}
      {!results && !isLoading && (
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="error">
          <div className="error__icon">❌</div>
          <h3 className="error__title">Analysis Failed</h3>
          <p className="error__message">{error}</p>
          <button className="error__retry" onClick={handleReset}>
            Try Again
          </button>
        </div>
      )}

      {results && <AnalysisResults data={results} onReset={handleReset} />}
    </div>
  );
}

export default App;
