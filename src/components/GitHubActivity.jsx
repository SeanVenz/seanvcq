import { useState, useEffect } from 'react';

const GitHubActivity = () => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGitHubActivity = async () => {
            try {
                const response = await fetch('https://api.github.com/users/SeanVenz/events/public');
                if (!response.ok) {
                    throw new Error(`Failed to fetch GitHub activity (status: ${response.status})`);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('Unexpected response format from GitHub API');
                }

                setActivity(data.slice(0, 10));
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Unknown error');
                setLoading(false);
            }
        };

        fetchGitHubActivity();
    }, []);

    const getActivityIcon = (type) => {
        switch (type) {
            case 'PushEvent':
                return '📝';
            case 'CreateEvent':
                return '✨';
            case 'WatchEvent':
                return '⭐';
            case 'ForkEvent':
                return '🍴';
            default:
                return '📌';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <section className='dark:bg-main bg-light-main w-full h-full transition-colors duration-300'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white'></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className='dark:bg-main bg-light-main w-full h-full transition-colors duration-300'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <p className='text-red-500'>Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className='dark:bg-main bg-light-main w-full h-full transition-colors duration-300'>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h2 className='text-3xl font-bold mb-8 dark:text-white text-gray-900'>GitHub Activity</h2>
                <div className='w-full max-w-4xl px-4'>
                    {activity.length === 0 ? (
                        <p className='text-gray-600 dark:text-gray-300 text-center'>No public activity found.</p>
                    ) : (
                        <div className='space-y-4'>
                            {activity.map((event, index) => (
                                <div
                                    key={event.id || index}
                                    className='p-4 rounded-lg shadow-md dark:bg-gray-800 bg-white dark:text-white text-gray-900'
                                >
                                    <div className='flex items-center space-x-3'>
                                        <span className='text-2xl'>{getActivityIcon(event.type)}</span>
                                        <div>
                                            <p className='font-medium'>
                                                {event.type === 'PushEvent' && event.repo && (
                                                    <>
                                                        Pushed to{' '}
                                                        <a
                                                            href={`https://github.com/${event.repo.name}`}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='text-blue-500 hover:underline'
                                                        >
                                                            {event.repo.name}
                                                        </a>
                                                    </>
                                                )}
                                                {event.type === 'CreateEvent' && event.repo && (
                                                    <>
                                                        Created repo{' '}
                                                        <a
                                                            href={`https://github.com/${event.repo.name}`}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='text-blue-500 hover:underline'
                                                        >
                                                            {event.repo.name}
                                                        </a>
                                                    </>
                                                )}
                                                {event.type === 'WatchEvent' && event.repo && (
                                                    <>
                                                        Starred{' '}
                                                        <a
                                                            href={`https://github.com/${event.repo.name}`}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='text-blue-500 hover:underline'
                                                        >
                                                            {event.repo.name}
                                                        </a>
                                                    </>
                                                )}
                                                {event.type === 'ForkEvent' && event.repo && (
                                                    <>
                                                        Forked{' '}
                                                        <a
                                                            href={`https://github.com/${event.repo.name}`}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='text-blue-500 hover:underline'
                                                        >
                                                            {event.repo.name}
                                                        </a>
                                                    </>
                                                )}
                                                {!['PushEvent', 'CreateEvent', 'WatchEvent', 'ForkEvent'].includes(event.type) &&
                                                    `Did a ${event.type}`}
                                            </p>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                {formatDate(event.created_at)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
