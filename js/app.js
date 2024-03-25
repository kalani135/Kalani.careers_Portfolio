
<div id="modal1" className="modal" onClick={this.closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal content for project 1 */}
        <span className="close" onClick={this.closeModal}>&times;</span>
        <p>SCOOPS Networking app details...</p>
        <img src={playButtonImage} alt="Play Button" width="30" />
    </div>
</div>

<div id="modal2" className="modal" onClick={this.closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal content for project 2 */}
        <span className="close" onClick={this.closeModal}>&times;</span>
        <p>NSA Desktop+Mobile app details...</p>
        <img src={playButtonImage} alt="Play Button" width="30" />
    </div>
</div>
