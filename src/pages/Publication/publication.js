import "./publication.scss";

function Publication() {
    const publications = [
        {
            title:
                "AI-Driven Scaffolding for Novice App Developers: RAG-Based Problem-Solving Support in MIT App Inventor",
            authors: "Anan Afrida, Hal Abelson, Evan Patton",
            venue:
                "MIT AI & Education Summit 2025; MIT Generative AI Impact Consortium (MGAIC) 2025"
        },
        {
            title:
                "Problem Scaffolding with RAG-finetuned Chatbot",
            authors: "Anan Afrida, Evan Patton, Hal Abelson",
            venue:
                "Tools Demo Track, International Conference on Technology for Education (T4E) 2025; To appear in EdTech Society Proceedings"
        },
        {
            title:
                "AI-Driven Scaffolding for Novice App Developers Using RAG-Finetuned Chatbot",
            authors: "Anan Afrida, Hal Abelson, Evan Patton",
            venue:
                "Under review — HCI International 2026 Conference"
        }
    ];

    return (
        <div className="publication-page show">
            <div className="publication-container">

                <div className="publication-title">
                    <h2>Publications</h2>
                </div>

                <div className="publication-list">
                    {publications.map((pub, i) => (
                        <div key={i} className="pub-card">
                            <h3 className="pub-title">{pub.title}</h3>
                            <p className="pub-authors">{pub.authors}</p>
                            <p className="pub-venue">{pub.venue}</p>
                        </div>
                    ))}
                </div>

                <p className="publication-footer">© 2025 Anan Afrida. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Publication;
