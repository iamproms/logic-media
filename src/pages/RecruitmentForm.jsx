import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Upload, AlertCircle } from 'lucide-react';

const subunits = [
    'Videography',
    'Photography',
    'Livestream',
    'Ideation',
    'Company of Publishers (C.O.P)',
    'Multimedia',
    'Sound',
    'Graphics',
];

const RecruitmentForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        joinMedia: '',
        subunits: [],
        doneLFC: '',
        attendedWorkersTraining: '',
        classesAttended: '',
        suggestions: '',
        lfcCertificate: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            let updatedSubunits = [...formData.subunits];
            if (checked) {
                updatedSubunits.push(value);
            } else {
                updatedSubunits = updatedSubunits.filter((unit) => unit !== value);
            }
            setFormData({ ...formData, subunits: updatedSubunits });
        } else if (type === 'file') {
            // Handled separately but for completeness structure
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.joinMedia) newErrors.joinMedia = 'Please select an option';
        if (formData.subunits.length === 0) newErrors.subunits = 'Please select at least one subunit';
        if (!formData.doneLFC) newErrors.doneLFC = 'Please select an option';
        if (!formData.attendedWorkersTraining) newErrors.attendedWorkersTraining = 'Please select an option';

        if (formData.doneLFC === 'Yes' && !formData.lfcCertificate) {
            newErrors.lfcCertificate = 'Please upload your LFC certificate';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        const form = e.target;
        const data = new FormData(form);

        // Netlify requires form-name
        data.set('form-name', 'media-recruitment');

        try {
            await fetch('/', {
                method: 'POST',
                body: data,
            });
            navigate('/thank-you');
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2 text-foreground">Join The Media Team</h1>
                <p className="text-muted-foreground">Fill out the form below to apply.</p>
            </div>

            <form
                name="media-recruitment"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-8 bg-card p-6 md:p-8 rounded-lg border border-border shadow-lg"
                onSubmit={handleSubmit}
                encType="multipart/form-data" // Critical for file upload
            >
                <input type="hidden" name="form-name" value="media-recruitment" />
                <p className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>

                {/* Full Name */}
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground">Full Name <span className="text-red-500">*</span></label>
                    <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Join Media? */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Would you like to be a part of the media department? <span className="text-red-500">*</span></label>
                    <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                            <input type="radio" name="joinMedia" value="Yes" checked={formData.joinMedia === 'Yes'} onChange={handleChange} className="accent-primary" />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                            <input type="radio" name="joinMedia" value="No" checked={formData.joinMedia === 'No'} onChange={handleChange} className="accent-primary" />
                            <span>No</span>
                        </label>
                    </div>
                    {errors.joinMedia && <p className="text-red-500 text-xs mt-1">{errors.joinMedia}</p>}
                </div>

                {/* Subunits */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">What subunit would you like to serve in? <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {subunits.map((unit) => (
                            <label key={unit} className="flex items-center space-x-2 cursor-pointer text-foreground">
                                <input
                                    type="checkbox"
                                    name="subunits"
                                    value={unit}
                                    checked={formData.subunits.includes(unit)}
                                    onChange={handleChange}
                                    className="rounded border-input bg-background text-primary focus:ring-primary"
                                />
                                <span>{unit}</span>
                            </label>
                        ))}
                    </div>
                    {errors.subunits && <p className="text-red-500 text-xs mt-1">{errors.subunits}</p>}
                </div>

                {/* LFC & Workers Training Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">Have you done LFC? <span className="text-red-500">*</span></label>
                        <div className="flex space-x-6">
                            <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                                <input type="radio" name="doneLFC" value="Yes" checked={formData.doneLFC === 'Yes'} onChange={handleChange} className="accent-primary" />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                                <input type="radio" name="doneLFC" value="No" checked={formData.doneLFC === 'No'} onChange={handleChange} className="accent-primary" />
                                <span>No</span>
                            </label>
                        </div>
                        {errors.doneLFC && <p className="text-red-500 text-xs mt-1">{errors.doneLFC}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">Did you attend the just concluded workers training? <span className="text-red-500">*</span></label>
                        <div className="flex space-x-6">
                            <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                                <input type="radio" name="attendedWorkersTraining" value="Yes" checked={formData.attendedWorkersTraining === 'Yes'} onChange={handleChange} className="accent-primary" />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer text-foreground">
                                <input type="radio" name="attendedWorkersTraining" value="No" checked={formData.attendedWorkersTraining === 'No'} onChange={handleChange} className="accent-primary" />
                                <span>No</span>
                            </label>
                        </div>
                        {errors.attendedWorkersTraining && <p className="text-red-500 text-xs mt-1">{errors.attendedWorkersTraining}</p>}
                    </div>
                </div>

                {/* Classes Attended */}
                <div className="space-y-2">
                    <label htmlFor="classesAttended" className="block text-sm font-medium text-foreground">How many classes did you attend?</label>
                    <Input
                        type="number"
                        id="classesAttended"
                        name="classesAttended"
                        value={formData.classesAttended}
                        onChange={handleChange}
                        min="0"
                        className="md:w-1/3"
                    />
                </div>

                {/* Suggestions */}
                <div className="space-y-2">
                    <label htmlFor="suggestions" className="block text-sm font-medium text-foreground">Any suggestions to move the unit forward?</label>
                    <textarea
                        id="suggestions"
                        name="suggestions"
                        rows="4"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.suggestions}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Upload your LFC certificate (PDF/JPG/PNG)</label>
                    <div className="border-2 border-dashed border-input rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <input
                            type="file"
                            name="lfcCertificate"
                            id="lfcCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                        />
                        <label htmlFor="lfcCertificate" className="cursor-pointer flex flex-col items-center justify-center space-y-2">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                                {formData.lfcCertificate ? formData.lfcCertificate.name : "Click to upload"}
                            </span>
                        </label>
                    </div>
                    {/* Helper text */}
                    {errors.lfcCertificate && <p className="text-red-500 text-xs mt-1">{errors.lfcCertificate}</p>}
                </div>

                <div className="pt-4">
                    <p className="text-xs text-muted-foreground mb-4 text-center">
                        All information provided will be used strictly for church media department purposes.
                    </p>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default RecruitmentForm;
