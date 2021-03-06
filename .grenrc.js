module.exports = {
    "dataSource": "issues",
    "prefix": "",
    "onlyMilestones": false,
    "ignoreIssuesWith": [
        "question",
        "wontfix",
        "invalid",
        "on hold",
        "help wanted",
        "good first issue"
    ],
    "groupBy": {
        "Xamarin Features": ["Xamarin"],
        "GitHub Features": ["GitHub"],
        "General Features": ["enhancement"],
        "Bug Fixes:": ["bug"],
        "Documentation Improvements:": ["documentation"],
        "Duplicate Issues:": ["duplicate"],
    },
    "changelogFilename": "CHANGELOG.md",
    "template": {
        commit: ({ message, url, author, name }) => `- [${message}](${url}) - ${author ? `@${author}` : name}`,
        issue: "- [{{text}}]({{url}}) {{name}}",
        label: "[**{{label}}**]",
        noLabel: "closed",
        group: "\n#### {{heading}}\n",
        changelogTitle: "# Changelog\n\n",
        release: "## {{release}} ({{date}})\n{{body}}",
        releaseSeparator: "\n---\n\n"
    }
}