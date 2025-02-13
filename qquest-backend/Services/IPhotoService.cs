namespace qquest_backend.Services
{
    public interface IPhotoService
    {
        Task<string> UploadQuestPhotoToCloudinary(IFormFile file);
    }
}
