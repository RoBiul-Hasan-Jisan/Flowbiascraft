const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Services
  async getServices(type = null) {
    const endpoint = type ? `/services/type/${type}` : '/services';
    return this.request(endpoint);
  }

  // Technologies
  async getTechnologies() {
    return this.request('/technologies');
  }

  // Customers & Partners
  async getCustomers(type = null) {
    const endpoint = type ? `/customers?type=${type}` : '/customers';
    return this.request(endpoint);
  }

  // Projects
  async getProjects() {
    return this.request('/projects');
  }

  // Team
  async getTeam() {
    return this.request('/team');
  }

  // Jobs
  async getJobs() {
    return this.request('/jobs');
  }

  // Offices
  async getOffices() {
    return this.request('/offices');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();