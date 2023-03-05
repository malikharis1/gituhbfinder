class Github {
  constructor() {
    this.client_id = "957b75903fe6ba596336";
    this.client_secret = "8594f585bfef0c23534d0415bc01f1fc64fcea31";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&cleint_secret= ${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page= ${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&cleint_secret= ${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
